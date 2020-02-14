import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a Test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHKukpb9NnZpXoy1JB4Cs-fdcJ87tI-oT4KiBdb-Q-8nq6HylP')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
