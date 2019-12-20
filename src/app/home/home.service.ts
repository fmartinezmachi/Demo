import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiService } from '@coreServices/api.service';
import { ProjectType } from '@coreEnums/project.enum';
import { Dependency } from '@coreModels/dependency';
import { Project } from '@coreModels/project';
import { Technology } from '@coreModels/technology';

@Injectable({
  providedIn: 'root',
})
export class HomeService implements OnDestroy {
  private dependenciesSource = new BehaviorSubject<Dependency[]>([]);
  private navigationTypesSource = new BehaviorSubject<NavigationType[]>([]);
  private technologiesSource = new BehaviorSubject<Technology[]>([]);
  dependencies$ = this.dependenciesSource.asObservable();
  navigationTypes$ = this.navigationTypesSource.asObservable();
  technologies$ = this.technologiesSource.asObservable();
  subscriptions = new Subscription();

  constructor(private apiService: ApiService) {}

  getDependencies(): Observable<Project[]> {
    const { dependenciesApi } = environment;
    return this.apiService.get(dependenciesApi);
  }

  getApplicationDependencies(): Observable<Project[]> {
    return this.getDependencies().pipe(
      map(dependencies => {
        return dependencies.filter(
          dependency => dependency.projectType === ProjectType.Application,
        );
      }),
    );
  }

  getComponentDependencies(): Observable<Project[]> {
    return this.getDependencies().pipe(
      map(dependencies => {
        return dependencies.filter(dependency => dependency.projectType === ProjectType.Component);
      }),
    );
  }

  getTechnologies(): Observable<string[]> {
    const { technologiesApi } = environment;
    return this.apiService.get(technologiesApi);
  }

  getAppData = () => {
    const { newAppApi } = environment;
    this.subscriptions.add(
      this.apiService.get(newAppApi).subscribe(response => {
        const { technologies = [], dependencies = [], navigationsTypes = [] } = response;
        this.dependenciesSource.next(dependencies);
        this.technologiesSource.next(technologies);
        this.navigationTypesSource.next(navigationsTypes);
      }),
    );
  };

  sendForm(form: Project): Observable<any> {
    const { projectApi } = environment;
    return this.apiService.post(projectApi, form);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
