import Location from './Location';
import Grid from './Grid';
import Battlefield from './Battlefield';

var grid = new Grid(20, 15, 50);

var canvas =  <HTMLCanvasElement> document.getElementById("battlefield");

var battlefield = new Battlefield(canvas, grid);

var ranger = new Location(3,3);
var pet = new Location(3,4);

var selected_entity = ranger;

document.addEventListener("keydown", (event) => {
	var updated = true; 

	if(event.key === '1'){
		selected_entity = ranger;
	}else if(event.key === '2'){
		selected_entity = pet;
	}else if(event.key === 'ArrowRight'){
		event.preventDefault();
		selected_entity.x += 1;
		if(selected_entity.x > battlefield.grid.columns){
			selected_entity.x = battlefield.grid.columns;
		}
	}else if(event.key === 'ArrowLeft'){
		event.preventDefault();
		selected_entity.x -= 1;
		if(selected_entity.x < 1){
			selected_entity.x = 1;
		}
	}else if(event.key === 'ArrowUp'){
		event.preventDefault();
		selected_entity.y -= 1;
		if(selected_entity.y < 1){
			selected_entity.y = 1;
		}
	}else if(event.key === 'ArrowDown'){
		event.preventDefault();
		selected_entity.y += 1;
		if(selected_entity.y > battlefield.grid.rows){
			selected_entity.y = battlefield.grid.rows;
		}
	}else{ 
		updated = false;
	}

	if(updated){
		battlefield.draw(selected_entity);
	}
})

battlefield.addEntity(ranger);
battlefield.addEntity(pet);

battlefield.draw(selected_entity);