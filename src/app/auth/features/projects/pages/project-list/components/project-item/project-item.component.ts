import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  projects$: Observable<any>;
  constructor(afs: AngularFirestore) {
    this.projects$ = afs.collection('projects', ref => ref.orderBy('id')).valueChanges();
  }


  ngOnInit(): void {

  }

}
