const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
	//Arrange
	const myCookbook = new Cookbook();
	const myCookbookCli = new CookbookCli(myCookbook);

	//Act
	const message = myCookbookCli.run('add','P&B Sandwich', ['bread','peanut butter','jam']);
	
	//Assert
	expect(message).toBe('Successfully added the following recipe: P&B Sandwich');
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
	//Arrange
	
	//Act
	
	//Assert
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
	//Arrange
	
	//Act
	
	//Assert
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
	//Arrange
	
	//Act
	
	//Assert
    });
  });
});
