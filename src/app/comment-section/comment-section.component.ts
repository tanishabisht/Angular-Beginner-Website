import { Component, OnInit } from '@angular/core'
import {freeApiService} from '../Services/freeapi.service'
import {Comments} from '../Classes/comments'
import {Post} from '../Classes/Post'

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  constructor(private _freeApiService : freeApiService){}

  lstComments:Comments[]
  lstPosts:Post[]

  postedPost = new Post(5, null, 'testTitle', 'testBody')
  returnedPostedPost:Post

  putPost = new Post(5, null, 'updated the title', 'updated the body')
  returnedPutPost:Post

  ngOnInit(){
    this._freeApiService.getComments().subscribe(data => this.lstComments = data)
    this._freeApiService.getCommentByParameter().subscribe(data => this.lstPosts = data)
    this._freeApiService.postPost(this.postedPost).subscribe(data => this.returnedPostedPost = data)
    this._freeApiService.putPost(this.putPost).subscribe(data => this.returnedPutPost = data)
    this._freeApiService.deletePost().subscribe(() => console.log('deleted sucessfully'))
  }


}
