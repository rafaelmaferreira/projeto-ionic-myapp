import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MoovieProvider} from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo:"Rafael Ferreira",
    data: "November 5, 1955",
    descricao: "Criando meu Proprio App.",
    qntd_likes: 12,
    qntde_coments: 4,
    time_coment: "11h ago"
  }

  public lista_filmes = new Array<any>();


  public nome_usuario:string = "Rafael Ferreira codigo";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider: MoovieProvider
              ) {
  }

  public somaDoisNumeros(num1:number, num2:number):void {

    //alert(num1+num2);

}

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response =(data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error=>{
        console.log(error);
      }
    )
  }

}
