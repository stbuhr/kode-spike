import { Component, OnInit, signal } from '@angular/core';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramInfo } from '../data/program-info';
import { ProgramLoaderService } from '../api-access/program-loader.service';

@Component({
  selector: 'isb-programs',
  imports: [ProgramListComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
})
export class ProgramsComponent implements OnInit {
  loading = signal<boolean>(true);
  programInfos = signal<ProgramInfo[]>([]);

  constructor(private programLoaderService: ProgramLoaderService) {}

  async ngOnInit() {
    this.programLoaderService.getProgramInfos().subscribe((programInfos) => {
      console.log('ProgramInfos:', programInfos);
      this.programInfos.set(programInfos);
      this.loading.set(false);
    });
  }
}
