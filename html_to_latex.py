import bs4
from bs4 import BeautifulSoup
import re
import os

INPUT_FILE = 'public/content/curso_completo.html'
OUTPUT_FILE = 'curso_completo.tex'

def escape_latex(text):
    if text is None:
        return ""
    # Standard LaTeX escaping
    text = text.replace('\\', r'\\textbackslash{}')
    text = text.replace('{', r'\{')
    text = text.replace('}', r'\}')
    text = text.replace('$', r'\$')
    text = text.replace('&', r'\&')
    text = text.replace('#', r'\#')
    text = text.replace('^', r'\textasciicircum{}')
    text = text.replace('_', r'\_')
    text = text.replace('%', r'\%')
    text = text.replace('~', r'\textasciitilde{}')
    return text

def process_element(element):
    if isinstance(element, bs4.element.NavigableString):
        return escape_latex(str(element))
    
    if element.name is None:
        return ""

    content = ""
    for child in element.children:
        content += process_element(child)

    if element.name == 'h1':
        if 'Curso Completo de Hindi' in content and len(content) < 100:
             return r"\title{" + content + "}\n" + r"\maketitle" + "\n" + r"\tableofcontents" + "\n" + r"\newpage" + "\n"
        return r"\section{"+ content + "}\n"
    
    elif element.name == 'h2':
        return r"\subsection{"+ content + "}\n"
    
    elif element.name == 'h3':
        return r"\subsubsection{"+ content + "}\n"
    
    elif element.name == 'h4':
        return r"\paragraph{"+ content + "} "
    
    elif element.name == 'p':
        return "\n" + content + "\n"
    
    elif element.name == 'span':
        if 'hindi' in element.get('class', []):
            return r"{\hindifont " + content + "}"
        return content
    
    elif element.name in ['strong', 'b']:
        return r"\textbf{"+ content + "}"
    
    elif element.name in ['em', 'i']:
        return r"\textit{"+ content + "}"
    
    elif element.name == 'ul':
        return "\n" + r"\begin{itemize}" + "\n" + content + r"\end{itemize}" + "\n"
    
    elif element.name == 'ol':
        return "\n" + r"\begin{enumerate}" + "\n" + content + r"\end{enumerate}" + "\n"
    
    elif element.name == 'li':
        return r"  \item " + content + "\n"
    
    elif element.name == 'div':
        classes = element.get('class', [])
        if 'nota' in classes or 'clarificacion' in classes:
            return "\n" + r"\begin{tcolorbox}[colback=blue!5!white,colframe=blue!75!black,title=Nota/Clarificación]" + "\n" + content + "\n" + r"\end{tcolorbox}" + "\n"
        elif 'regla-oro' in classes:
            return "\n" + r"\begin{tcolorbox}[colback=yellow!10!white,colframe=orange!75!black,title=Regla de Oro]" + "\n" + content + "\n" + r"\end{tcolorbox}" + "\n"
        elif 'example-box' in classes:
            return "\n" + r"\begin{tcolorbox}[colback=green!5!white,colframe=green!75!black,title=Ejemplo]" + "\n" + content + "\n" + r"\end{tcolorbox}" + "\n"
        elif 'explanation' in classes:
            return "\n" + r"\begin{tcolorbox}[colback=gray!5!white,colframe=gray!75!black,title=Explicación]" + "\n" + content + "\n" + r"\end{tcolorbox}" + "\n"
        elif element.get('id') == 'toc':
             return ""
        return "\n" + content + "\n"

    elif element.name == 'table':
        rows = element.find_all('tr')
        if not rows:
            return ""
        
        max_cols = 0
        for row in rows:
            cols = row.find_all(['td', 'th'])
            max_cols = max(max_cols, len(cols))
            
        if max_cols == 0: return ""

        col_def = "| " + " | ".join(["X"] * max_cols) + " |"
        
        latex_table = "\n" + r"\begin{center}" + "\n" + r"\begin{tabularx}{\textwidth}{" + col_def + "}" + "\n" + r"\hline" + "\n"
        
        for row in rows:
            cols = row.find_all(['td', 'th'])
            row_content = []
            for col in cols:
                cell_text = ""
                for child in col.children:
                    cell_text += process_element(child)
                
                if col.name == 'th':
                    cell_text = r"\textbf{"+ cell_text + "}"
                row_content.append(cell_text.strip())
            
            while len(row_content) < max_cols:
                row_content.append("")
                
            latex_table += " & ".join(row_content) + r" \ \hline" + "\n"
        
        latex_table += r"\end{tabularx}" + "\n" + r"\end{center}" + "\n"
        return latex_table

    elif element.name == 'hr':
        return "\n" + r"\hrulefill" + "\n"
    
    elif element.name == 'br':
        return r"\newline "

    return content

def main():
    if not os.path.exists(INPUT_FILE):
        print(f"Error: File {INPUT_FILE} not found.")
        return

    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    body = soup.body if soup.body else soup

    preamble = r"""\documentclass[12pt,a4paper]{{article}}
\usepackage[utf8]{{inputenc}}
\usepackage{{fontspec}}
\usepackage{{polyglossia}}
\setmainlanguage{{spanish}}
\setotherlanguage{{hindi}}

% Font setup - IMPORTANT: You must have 'Noto Sans Devanagari' installed or change this.
\newfontfamily\hindifont{{Noto Sans Devanagari}}[Script=Devanagari, AutoFakeBold=1.5]
\setmainfont{{Arial}}

\usepackage{{geometry}}
\geometry{{margin=2.5cm}}
\usepackage{{hyperref}}
\usepackage{{xcolor}}
\usepackage{{tcolorbox}}
\usepackage{{tabularx}}
\usepackage{{float}}
\usepackage{{booktabs}}

\setlength{{\parskip}}{{1em}}
\setlength{{\parindent}}{{0pt}}

\begin{{document}}

"""
    
    latex_content = preamble
    latex_content += process_element(body)
    latex_content += r"\end{document}"

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(latex_content)
    
    print(f"Conversion complete. Output saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()