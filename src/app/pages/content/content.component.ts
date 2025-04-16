import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
    photoCover:string="https://geartechbr.com.br/wp-content/uploads/2023/08/O-que-e-Inteligencia-Artificial-e-qual-e-sua-importancia-para-a-industria.png"
    @Input()
    contentTitle:string=""
    @Input()
    contentDescription:string="A inteligência artificial está moldando o futuro da tecnologia de forma rápida e impactante. De assistentes virtuais a carros autônomos, a IA está cada vez mais presente no nosso dia a dia. Nos próximos anos, espera-se que ela evolua ainda mais, tornando-se capaz de tomar decisões mais complexas, entender emoções humanas e colaborar lado a lado com profissionais em diversas áreas."
    private id:String | null="0"

    constructor( private route:ActivatedRoute ){ }

    ngOnInit(): void{
      this.route.paramMap.subscribe( params => this.id = params.get("id"))
      
      this.setValuesToComponent(this.id)
    }

    setValuesToComponent(id:String  | null){
      const result = dataFake.filter(article => article.id.toString() == id)[0]

      
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover =   result.photoCover 
    
    
    }

}
