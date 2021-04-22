const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
	//Arrange
	const myCookbook = new Cookbook();
	const recipeName = 'Cafe Latte';
	const recipeIngredients = ['coffee','frothed milk'];

	const expectedRecipes = {'Cafe Latte': ['coffee', 'frothed milk'] };

	//Act
	myCookbook.addRecipe(recipeName, recipeIngredients);

	//Assert
	expect(myCookbook.recipes).toEqual(expectedRecipes);
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
	//Arrange
	const myCookbook = new Cookbook();

	//Act
	const myRecipes = myCookbook.listRecipes();

	//Assert
	expect(myRecipes).toEqual([]);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
	//Arrange
	const myCookbook = new Cookbook();
	myCookbook.addRecipe('Cafe Latte', ['coffee', 'frothed milk']);

	//Act
	const myRecipe = myCookbook.getRecipe('Cafe Latte');

	//Assert
	expect(myRecipe).toEqual(['coffee','frothed milk']);
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
	//Arrange
	const myCookbook = new Cookbook();
	myCookbook.addRecipe('Cafe Latte', ['coffee', 'frothed milk']);

	//Act
	myCookbook.removeRecipe('Cafe Latte');

	//Assert
	expect(myCookbook.recipes).toEqual({});
    });
  });
});
