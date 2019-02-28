import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
      // for(let stage in this.stages){db: AngularFirestore
      //   db.collection("stages").add(this.stages[stage]);
      // }

      afAuth.auth.onAuthStateChanged(user=>{
        if(user)this.loggedIn = true;
      })
      
  }

  currentStage = "stage 1";
  selectedStage = this.currentStage;

  stages = {
    "stage 1":{
      name:"stage 1",
      img: "https://via.placeholder.com/300x200.png?text=stage1"
    },
    "stage 2":{
      name:"stage 2",
      img: "https://via.placeholder.com/300x200.png?text=stage2"
    },
    "stage 3":{
      name:"stage 3",
      img: "https://via.placeholder.com/300x200.png?text=stage3"
    },
    "stage 4":{
      name:"stage 4 ",
      img: "https://via.placeholder.com/300x200.png?text=stage4"
    },
     "stage 5":{
      name:"stage 5 ",
      img: "https://via.placeholder.com/300x200.png?text=stage5"
    },
     "stage 6":{
      name:"stage 6",
      img: "https://via.placeholder.com/300x200.png?text=stage6"
    }
  }

  error="";

   keys = Object.keys(this.stages);

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.user.username, this.user.password).then(auth=>{
      this.loggedIn = true;
    }).catch(e=>{
      this.error = e;
    });
    
  }

  logout() {
    this.afAuth.auth.signOut();
    this.loggedIn = false;
  }

  updateStage(){
    this.timeSince = moment().fromNow();
    this.currentStage = this.selectedStage;
  }

  user = {
    username:"",
    password:""
  };


  loggedIn = false;

  timeSince = moment.unix(1550438400).fromNow();

}
