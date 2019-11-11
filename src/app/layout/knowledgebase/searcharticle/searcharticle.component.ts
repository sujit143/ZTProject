import { DdlCatogoryName } from '../../../Models/ddlcategory';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { KBArticles } from '../../../Models/kbarticles';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import { ArticleService } from '../../../services/appservices/article.service';

@Component({
selector: 'app-searcharticle',
templateUrl: './searcharticle.component.html',
styleUrls: ['./searcharticle.component.scss']
})
export class SearcharticleComponent implements OnInit {
	@Output() emit1 = new EventEmitter();
	@Output() emit2 = new EventEmitter();

	arr_search: KBArticles[] = [];
	id: number;
	arr: KBArticles[] = [];
	artcle: KBArticles[];
	article: KBArticles[];
	//event emitter
	arr1: DdlCatogoryName[];

	constructor(private _data: ArticleService, private actroute: ActivatedRoute) {}

	ngOnInit() {
		this._data.getCategory().subscribe(
			(data: DdlCatogoryName[]) => {
				this.arr1 = data;
				console.log(this.arr1);

			}
		);


	}

	selectedAnswer: number;
	updateCheckedOptions(id) {

		this.selectedAnswer = id;
		this.emit1.emit(id);


	}
	onSearchClick(searchTerm) {
		this.emit2.emit(searchTerm);
		console.log(searchTerm);
	}


}
