// TextDocument class to represent the text document
class TextDocument {
    constructor() {
      this.content = "";
    }
  
    // Method to set content of the document
    setContent(content) {
      this.content = content;
    }
  
    // Method to get content of the document
    getContent() {
      return this.content;
    }
  }
  
  // TextEditor class to manage the document and provide save and undo functionalities
  class TextEditor {
    constructor() {
      this.document = new TextDocument();
      this.history = [];
    }
  
    // Method to save the current state of the document
    save() {
      // Save the current content to history
      this.history.push(this.document.getContent());
    }
  
    // Method to undo the last change made to the document
    undo() {
      if (this.history.length > 0) {
        // Retrieve the last saved state from history
        const lastContent = this.history.pop();
        this.document.setContent(lastContent);
      } else {
        console.log("No changes to undo.");
      }
    }
  
    // Method to write content to the document
    write(content) {
      // Save the current state before making changes
      this.save();
      // Update the document content
      this.document.setContent(content);
    }
  
    // Method to print the current content of the document
    printContent() {
      console.log(this.document.getContent());
    }
  }
  
  // Example usage:
  const editor = new TextEditor();
  
  // Initial content
  editor.write("Hello, World!");
  editor.printContent(); // Output: Hello, World!
  
  // Update content
  editor.write("Hello, Universe!");
  editor.printContent(); // Output: Hello, Universe!
  
  // Undo the last change
  editor.undo();
  editor.printContent(); // Output: Hello, World!
  
  // Undo again (no changes to undo)
  editor.undo();
  editor.printContent(); // Output: Hello, World!
  