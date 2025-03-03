import { Component, Signal, signal, computed, ResourceStatus } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramInfo } from '../data/program-info';
import { ProgramLoaderService } from '../api-access/program-loader.service';
import { ProgramData } from '../data/program-data';
import { ProgramDetailsComponent } from './program-details/program-details.component';

@Component({
  selector: 'isb-programs',
  imports: [ProgramListComponent, ProgramDetailsComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
})
export class ProgramsComponent {
  programInfos = computed(() => this.userResource.value() ?? []);
  activeProgram = signal<ProgramInfo | undefined>(undefined);
  programData = signal<ProgramData | undefined>(undefined);
  loading = computed(() => this.userResource.status() === ResourceStatus.Loading);

  userId: Signal<string> = signal('1234');

  userResource = rxResource({
    request: () => ({ id: this.userId() }),
    loader: ({ request }) => this.programLoaderService.getProgramInfos(request.id),
  });

  constructor(private programLoaderService: ProgramLoaderService) {}

  selectProgram($event: ProgramInfo) {
    this.activeProgram.set($event);

    this.programLoaderService.getProgramData($event.id).subscribe(programData => {
      this.programData.set(programData ?? undefined);
    });
  }
}
