import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
// import { CommonHttpService } from 'src/app/shared/common-http.service';
import { KBArticles } from 'src/app/Models/kbarticles';
import { DdlCatogoryName } from 'src/app/Models/ddlcategory';
import { ArticleService } from '../../../../app/services/appservices/article.service'
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {
  addForm: FormGroup;
  msgs: Message[] = [];
  constructor(private fb: FormBuilder, private data: ArticleService,private route:Router,private messageService: MessageService) { }
  cat: DdlCatogoryName[] = [];
  ngOnInit() {
    this.data.getCategory().subscribe(
        (data:DdlCatogoryName[])=>{
          this.cat=data;
          console.log(this.cat);
        }
      );
    this.addForm = this.fb.group({
      article_name: new FormControl(),
      content: new FormControl(),
      category_id: new FormControl()
      //category_name: new FormControl(),
    });

  }

  onAddArticle() {
    this.data.addArticle(
      new KBArticles(
        this.addForm.value.article_id,
        this.addForm.value.article_name,
        this.addForm.value.content,
        this.addForm.value.previewcontent,
        this.addForm.value.category_id,
        this.addForm.value.category_name,
        this.addForm.value.created_by,
        this.addForm.value.created_by_name,
        this.addForm.value.created_date,
        this.addForm.value.modified_by,
        this.addForm.value.modified_by_name,
        this.addForm.value.modified_date
      ))
      .then((x) => {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'succes', detail: 'article  Added' }); },
    function(err) { console.log(err); });
}

  onClickClose() {
    this.route.navigate(['/knowledge-base']);
  }

}

