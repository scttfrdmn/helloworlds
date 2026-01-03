# Contributing to helloworlds.io

Thank you for your interest in contributing! This guide will help you add new languages and improve the project.

## How to Contribute

### Adding a New Language

1. **Fork the repository**
2. **Create a new branch**
   ```bash
   git checkout -b add-language-name
   ```

3. **Edit `languages.js`**
   Add your language to the `languages` array following this template:

   ```javascript
   {
       name: "LanguageName",
       year: 2024, // Year of first public release
       tags: ["tag1", "tag2"], // See available tags below
       code: `your "Hello, World!" code here`,
       filename: "hello.ext", // Standard file extension
       description: "A compelling 1-2 sentence description."
   }
   ```

4. **Test locally**
   - Open `index.html` in your browser
   - Search for your language
   - Verify syntax highlighting works
   - Check that filtering works correctly

5. **Commit and push**
   ```bash
   git add languages.js
   git commit -m "Add [Language Name] implementation"
   git push origin add-language-name
   ```

6. **Create a Pull Request**

## Language Entry Guidelines

### Name
- Use the official language name
- Capitalize properly (e.g., "JavaScript" not "javascript")
- Include version if relevant (e.g., "Assembly (x86)")

### Year
- Use the year of first public release
- For historical languages, research carefully
- Include in description if version-specific

### Tags
Choose all applicable tags:
- `compiled` - Compiles to machine code or bytecode
- `interpreted` - Executes directly from source
- `functional` - Functional programming paradigm
- `oop` - Object-oriented programming support
- `esoteric` - Esoteric/artistic languages
- `web` - Web development languages
- `system` - Systems programming languages

### Code
- Use the idiomatic "Hello, World!" for that language
- Keep it simple and authentic
- Properly escape special characters in the string
- Include necessary imports/boilerplate
- Format with proper indentation (4 spaces recommended)

**Good Examples:**
```javascript
// Python - simple and clean
print("Hello, World!")

// Java - shows necessary class structure
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Avoid:**
```javascript
// Don't add unnecessary complexity
print("Hello, World!")  # prints greeting to console with newline character using built-in function

// Don't use non-standard approaches
System.out.println("Hello, " + "World" + "!");
```

### Filename
- Use the standard file extension
- Lowercase unless language convention differs
- Examples: `hello.py`, `hello.js`, `HelloWorld.java`

### Description
- 1-2 sentences (aim for ~30-50 words)
- Capture the essence of the language
- Mention what makes this "Hello, World!" unique or interesting
- Highlight historical significance if applicable
- Keep tone educational and engaging

**Good Examples:**
- "Python's elegant syntax makes the classic greeting refreshingly simple—just a single line that embodies its philosophy of readability."
- "The grandfather of modern programming. C's verbose ceremony teaches us that every greeting requires proper structure and explicit intention."

**Avoid:**
- Generic descriptions: "A programming language that prints Hello World"
- Marketing speak: "The best language ever created"
- Too technical: "Uses a lexical parser to tokenize the string literal"

## Code Quality

### JavaScript
- Use ES6+ features where appropriate
- Follow existing code style
- Comment complex logic
- Test in multiple browsers if adding features

### CSS
- Use CSS custom properties (variables)
- Follow BEM naming where applicable
- Ensure responsive design
- Maintain consistent spacing

### HTML
- Semantic HTML5 elements
- Proper accessibility attributes
- Valid HTML structure

## Testing Checklist

Before submitting, verify:
- [ ] Language appears in the grid
- [ ] Syntax highlighting works correctly
- [ ] Filtering by all relevant tags works
- [ ] Search finds the language by name
- [ ] Copy button works
- [ ] Description is clear and engaging
- [ ] Code is properly formatted
- [ ] No console errors
- [ ] Responsive on mobile devices

## Suggesting Features

Have an idea for a new feature?

1. Check existing issues to avoid duplicates
2. Open an issue with the `enhancement` label
3. Describe:
   - The problem it solves
   - Proposed solution
   - Any implementation ideas
   - Mockups if applicable

## Reporting Bugs

Found a bug?

1. Check if it's already reported
2. Open an issue with the `bug` label
3. Include:
   - Description of the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Browser/OS information
   - Screenshots if relevant

## Design Contributions

Improving the design?

1. Maintain the existing aesthetic direction
2. Keep accessibility in mind (contrast ratios, font sizes)
3. Ensure smooth animations (60fps)
4. Test on various screen sizes
5. Document any new CSS custom properties

## Documentation

Improving documentation is valuable! You can:
- Fix typos
- Clarify instructions
- Add examples
- Translate to other languages
- Improve code comments

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Celebrate diversity in programming languages and paradigms
- Remember: all languages are valid, from Python to Brainfuck

## Questions?

- Open a discussion in GitHub Discussions
- Check existing issues and pull requests
- Review the README.md

## Recognition

Contributors will be:
- Listed in the project contributors
- Credited in release notes
- Part of a community celebrating programming history

Thank you for helping preserve and celebrate the tradition of "Hello, World!" 🎉
