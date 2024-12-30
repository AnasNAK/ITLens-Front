import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { LucideAngularModule } from 'lucide-angular';
import { 
  LayoutDashboard, 
  FileText, 
  Layers, 
  HelpCircle, 
  Settings, 
  PlusCircle,
  Edit,
  Trash2,
  User,
  Calendar,
  Clock,
  Plus
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({
        LayoutDashboard,
        FileText,
        Layers,
        HelpCircle,
        Settings,
        PlusCircle,
        Edit,
        Trash2,
        User,
        Calendar,
        Clock,
        Plus
      })
    )
  ]
};

