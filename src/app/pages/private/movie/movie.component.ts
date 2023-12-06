import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @ViewChild('youTubePlayer') youTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  @Input() id: string;
  movie: Movie;
  video_id: string;

  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
      await this.getMovie();
  }

  onResize = (): void => {
    this.videoWidth = Math.min(this.youTubePlayer?.nativeElement.clientWidth, 750);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  async getMovie() {
    this.movie = this.moviesService.getMovieById(+this.id);
  }

  openTrailer(content: TemplateRef<any>) {
    this.video_id = this.movie.trailer_link?.split('=')[1]!;
		this.modalService.open(content, { size: 'lg' });
    this.onResize();
    window.addEventListener('resize', this.onResize);
	}

}