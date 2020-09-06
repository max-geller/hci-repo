import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  constructor(afs: AngularFirestore) {
  }


  ngOnInit(): void {

  }

}
