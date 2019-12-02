import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiService } from '@coreServices/api.service';
import { Technology } from '@coreModels/technology';
import { NavigationTypes } from '@coreEnums/navigation-type.enum';
import { ProjectType } from '@coreEnums/project.enum';
import { Project } from '@coreModels/project';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private apiService: ApiService) {}

  getDependencies(): Observable<Project[]> {
    const { dependenciesApi } = environment;
    return this.apiService.get(dependenciesApi);
  }

  getApplicationDependencies(): Observable<Project[]> {
    return this.getDependencies().pipe(
      map(dependencies => {
        return dependencies.filter(
          dependency => dependency.projectTypeName === ProjectType.Application,
        );
      }),
    );
  }

  getComponentDependencies(): Observable<Project[]> {
    return this.getDependencies().pipe(
      map(dependencies => {
        return dependencies.filter(
          dependency => dependency.projectTypeName === ProjectType.Component,
        );
      }),
    );
  }

  getTechnologies(): Observable<Technology[]> {
    const { technologiesApi } = environment;
    return this.apiService.get(technologiesApi);
  }

  getImages(): Observable<string[]> {
    const { imagesApi } = environment;
    return this.apiService.get(imagesApi);
  }

  get navigationTypes(): any[] {
    return Object.keys(NavigationTypes).map(navType => ({
      type: navType,
      label: NavigationTypes[navType],
    }));
  }

  sendForm(form: Project): Observable<any> {
    const { projectApi } = environment;
    return this.apiService.post(projectApi, form);
  }
}
