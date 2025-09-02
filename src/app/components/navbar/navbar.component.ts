import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
    private scrollListener?: () => void;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit() {
    }

    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId) && this.scrollListener) {
            window.removeEventListener('scroll', this.scrollListener);
        }
    }

    toggleMobileMenu() {
        if (!isPlatformBrowser(this.platformId)) return;
        
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger?.classList.toggle('active');
        navMenu?.classList.toggle('active');
    }

    closeMobileMenu() {
        if (!isPlatformBrowser(this.platformId)) return;
        
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
}
