import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.less'],
  animations: [
    trigger('recipeBlock', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('.3s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RecipeBoxComponent implements OnInit {

  isOpenRecipe = false;
  isEditDialog = false;
  testBool = false;
  @Input() recipe;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateItem: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }

  openRecipe() {
    this.isOpenRecipe = true;
  }

  hideRecipe() {
    this.isOpenRecipe = false;
  }

  editRecipe() {
    this.isEditDialog = true;
  }

  editDialogClose() {
    this.isEditDialog = false;
  }

  saveDialogClose() {
    this.updateItem.emit(this.recipe);
    this.editDialogClose();
  }

  deleteRecipe(itemId: any) {
    this.deleteItem.emit(itemId);
  }
}
