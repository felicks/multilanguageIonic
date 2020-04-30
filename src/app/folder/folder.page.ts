import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public language : string; 
  public languageSelection = this.translate.currentLang;
  constructor(private activatedRoute: ActivatedRoute,  public translate: TranslateService) { 
   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getTitle(id){
    console.log(id)
    switch (id) {
      case "1":
        return this.translate.instant('menu.entry')
      case "2":
        return this.translate.instant('menu.gallery')
      case "3":
        return this.translate.instant('menu.favorites')
      case "4":
        return this.translate.instant('menu.settings') 
    }
  }
  getLanguage(){
    console.log(this.translate.currentLang)
    return this.translate.currentLang
  }
  languageChange() {  // add this
    this.translate.use(this.languageSelection);  // add this
  } 
}
