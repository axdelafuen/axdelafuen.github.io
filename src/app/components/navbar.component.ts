import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
    private scrollListener?: () => void;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.setupEventListeners();
        }
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

    navigateTo(event: Event, href: string) {
        if (!isPlatformBrowser(this.platformId)) return;
        
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = href === '#top' ? 0 : target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        this.closeMobileMenu();
    }

    private setupEventListeners() {
        this.scrollListener = () => {
            let current = '';
            const sections = document.querySelectorAll('section[id], [id="top"]');
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.pageYOffset - 100;
                const sectionHeight = rect.height;
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id') || '';
                }
            });
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', this.scrollListener);
    }
}
