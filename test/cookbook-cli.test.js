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
	const myCookbook = new Cookbook();
	const myCookbookCli = new CookbookCli(myCookbook);
	myCookbook.addRecipe('P&B Sandwich', ['bread','peanut butter','jam']);

	//Act
	const message = myCookbookCli.run('list');

	//Assert
	expect(message).toBe('You have the following recipes: P&B Sandwich');
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
	//Arrange
	const myCookbook = new Cookbook();
	const myCookbookCli = new CookbookCli(myCookbook);
	myCookbook.addRecipe('P&B Sandwich', ['bread','peanut butter','jam']);

	//Act
	const message = myCookbookCli.get('P&B Sandwich')

	//Assert
	expect(message).toBe('The ingredients for P&B Sandwich are: bread,peanut butter,jam');
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
	//Arrange
	const myCookbook = new Cookbook();
	const myCookbookCli = new CookbookCli(myCookbook);
	myCookbook.addRecipe('P&B Sandwich', ['bread','peanut butter','jam']);

	//Act
	const message = myCookbookCli.remove('P&B Sandwich');

	//Assert
	expect(message).toBe('Successfully removed the following recipe: P&B Sandwich');
    });
  });
});
