import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
    private scrollListener?: () => void;

    ngOnInit() {
        this.setupEventListeners();
    }

    ngOnDestroy() {
        if (this.scrollListener) {
            window.removeEventListener('scroll', this.scrollListener);
        }
    }

    toggleMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger?.classList.toggle('active');
        navMenu?.classList.toggle('active');
    }

    closeMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }

    navigateTo(event: Event, href: string) {
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
