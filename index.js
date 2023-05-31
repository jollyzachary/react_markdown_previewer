const { React, ReactDOM, marked } = window;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Here's a link: [Link](https://www.freecodecamp.com)

Inline code: \`<div>The quick brown fox jumped over the lazy dog.</div>\`, between 2 backticks.

\`\`\`
// Multi-line code:

function hello() {
  console.log('Hello, world!');
}

print('Me trying to use python inside .js lol I can Dream');
\`\`\`

- This is a list item
- And another one

> This is a block quote.

**This is bold text**

Here's a table:

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |


![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
`,
    };
  }

  handleChange = (e) => {
    this.setState({ markdown: e.target.value });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <textarea id="editor" value={this.state.markdown} onChange={this.handleChange} style={{ marginBottom: '20px' }} />
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} />
      </div>
    );
  }
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'));
