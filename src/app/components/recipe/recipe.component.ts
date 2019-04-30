import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  isOpenDialog = false;

  recipes: Array<Recipe> = [
    {
      id: 1,
      name: 'Борщ',
      ingredients: 'Мясо, картофель, луковица, морковь, свекла, капуста, чеснок, томатная паста, уксус, соль, перец'
    },
    {
      id: 2,
      name: 'Солянка',
      ingredients: 'Колбаса копченая, сосиски, говядина вареная, бульонные кубики, вода, лук репчатый'
    }
  ];

  data: FormGroup = null;


  constructor() {
  }

  ngOnInit() {
    this.data = new FormGroup(
      {
        name: new FormControl(
          '', [Validators.required]
        ),
        ingredients: new FormControl(
          '', [Validators.required]
        )
      }
    );

    window.onkeyup = (key) => {
      if (key.key === 'Escape') {
        this.isOpenDialog = false;
      }
    };
  }

  openDialog() {
    this.isOpenDialog = true;
  }

  closeDialog() {
    this.isOpenDialog = false;
  }

  deleteRecipe(itemId: any) {
    this.recipes = this.recipes.filter(x => x.id !== itemId);
  }

  updateRecept(itemUpdate: any) {
    this.recipes.forEach((item) => {
      if (item.id === itemUpdate.id) {
        let item = JSON.parse(JSON.stringify(itemUpdate));
      }
    });
  }

  saveNewReceipt() {
    if (this.data.valid) {
      const recipeNew: Recipe = {
        id: this.recipes.length + 1,
        name: this.data.get('name').value,
        ingredients: this.data.get('ingredients').value
      };
      this.recipes.push(recipeNew);
      localStorage.setItem('recipe', JSON.stringify(this.recipes));
      this.closeDialog();
      this.data.reset();
    }
  }

}
