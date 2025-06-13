import { Routes } from '@angular/router';

// Esta é a configuração de rotas da sua aplicação.
// Ela usa "lazy loading" (carregamento sob demanda) para carregar cada
// página apenas quando o usuário a visita, o que melhora a performance.

export const routes: Routes = [
  {
    // Rota para a página de Login
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then(
        (m) => m.LoginComponent
      ),
    title: 'Login', // Define o título da página no navegador
  },
  {
    // Rota para a página "Local do Evento"
    // Assumindo que o componente principal se chama EventLocationComponent
    path: 'local',
    loadComponent: () =>
      import('./features/local/event-location.component').then(
        (m) => m.EventLocationComponent
      ),
    title: 'Local do Evento',
  },
  {
    // Rota para a página "Avaliação de Riscos"
    // Assumindo que o componente principal se chama RiskAssessmentComponent
    path: 'risco',
    loadComponent: () =>
      import('./features/danger/risk-assessment.component').then(
        (m) => m.RiskAssessmentComponent
      ),
    title: 'Avaliação de Riscos',
  },
  {
    // Rota para a página de "Evidências" (Anexos)
   
    path: 'evidencias',
    loadComponent: () =>
      import('./features/evidence/upload-file/upload-file.component').then(
        (m) => m.UploadFileComponent
      ),
    title: 'Evidências',
  },
  {
    // Rota padrão. Se o usuário acessar a raiz do site,
    // ele será redirecionado para a página de login.
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    // Rota "Curinga". Se o usuário acessar uma URL que não existe,
    // ele também será redirecionado para a página de login.
    path: '**',
    redirectTo: '/login',
  },
];
