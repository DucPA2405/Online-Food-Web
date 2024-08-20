import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      { name: 'All', count: 23 },
      { name: 'FastFood', count: 23 },
      { name: 'Hambuger', count: 3 },
      { name: 'Breakfast', count: 23 },
      { name: 'Pastar', count: 8 },
      { name: 'Lunch', count: 5 },
      { name: 'HotDog', count: 2 },
      { name: 'FriedChicken', count: 4 },
      { name: 'Pizza', count: 1 },
    ]
  }

  getAllFoodsByTag(tag:string): Food[] {
    console.log(tag)
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Hambuger',
        price: 5,
        cookTime: '5-10',
        favorite: false,
        origins: ['American'],
        stars: 4,
        imageUrl: 'assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Hambuger', 'Breakfast' ]
      },
      {
        id: 2,
        name: 'Pastar with Meatball',
        price: 10,
        cookTime: '15-20',
        favorite: false,
        origins: ['Italia'],
        stars: 4,
        imageUrl: 'assets/images/foods/food-2.jpg',
        tags: ['FastFood', 'Pastar', 'Lunch' ]
      },
      {
        id: 3,
        name: 'Fried Chicken',
        price: 3,
        cookTime: '5-10',
        favorite: true,
        origins: ['American'],
        stars: 4.5,
        imageUrl: 'assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'FriedChicken', 'Lunch' ]
      },
      {
        id: 4,
        name: 'Hot Dog',
        price: 2,
        cookTime: '3-5',
        favorite: false,
        origins: ['American'],
        stars: 3.5,
        imageUrl: 'assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'HotDog', 'Breakfast' ]
      },
      {
        id: 5,
        name: 'Pastar',
        price: 8,
        cookTime: '20-25',
        favorite: true,
        origins: ['Italia'],
        stars: 4,
        imageUrl: 'assets/images/foods/food-5.jpg',
        tags: ['FastFood', 'Pastar', 'Lunch' ]
      },
      {
        id: 6,
        name: 'Pizza',
        price: 5,
        cookTime: '5-10',
        favorite: true,
        origins: ['Italia'],
        stars: 5,
        imageUrl: 'assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch' ]
      },
    ]
  }
}
