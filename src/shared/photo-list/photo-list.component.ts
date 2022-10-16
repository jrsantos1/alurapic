import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activeRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    const userName = this.activeRoute.snapshot.params['userName'];
    this.photoService.listForUser(userName).subscribe(photo => this.photos = photo)
  }
}
