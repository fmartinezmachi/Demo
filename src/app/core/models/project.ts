import { Update } from './update';
import { Artifact } from './artifact';
import { Granularity } from '@coreEnums/granularity.enum';
import { ProjectScope, ProjectFunctionalArea } from '@coreEnums/project.enum';
import { ProjectType } from '@coreEnums/project.enum';
import { UserScope } from '@coreEnums/user-scope.enum';
import { Technology } from '@coreModels/technology';

export interface Project {
  projectName: string;
  projectDescription: string;
  projectTypeId: number;
  projectTypeName: ProjectType;
  urlImage: string;
  projectTechnologies: Technology[];
  projectDependencies: Project[];
  projectId?: string;
  urlSample?: string;
  urlCode?: string;
  projectArtifact?: Artifact;
  projectProperties?: Property[];
  userScope?: UserScope;
  granularity?: Granularity;
  projectScope?: ProjectScope;
  projectFunctionalArea?: ProjectFunctionalArea;
  lastUpdate?: Update;
  latestCommit?: Commit;
  latestReleaseCommit?: Commit;
  latestPassedTestCommit?: Commit;
  coverage?: string;
}

interface Commit {
  Id: number;
  Comment: string;
  Date: string;
}

interface Property {
  propertyId: number;
  propertyName: string;
  propertyType: string;
  propertyDefaultValue: string;
}
