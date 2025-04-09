import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import type { MenuItem } from 'primeng/api';
import { Product } from '../../../shared/model/ProductDTO';
import { ProductsService } from '../../services/products.service';
import { Category } from '../../../shared/model/CategoryDTO';
import { CategoriesService } from '../../../shared/services/categories.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    TagModule,
    InputTextModule,
    MenubarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly productService = inject(ProductsService);
  private readonly categoriesService = inject(CategoriesService);

  products: Product[] = [];
  categories: Category[] = [];
  featuredProducts: Product[] = [];
  menuItems: MenuItem[] = [];

  testimonials = [
    {
      name: 'Sarah Johnson',
      image: '/placeholder.svg?height=48&width=48',
      rating: 5,
      comment:
        "I'm extremely satisfied with my purchase from MercatifyStore. The quality of the products exceeded my expectations, and the delivery was prompt.",
    },
    {
      name: 'Michael Rodriguez',
      image: '/placeholder.svg?height=48&width=48',
      rating: 4,
      comment:
        'Great customer service! I had an issue with my order and the team resolved it quickly. Will definitely shop here again.',
    },
    {
      name: 'Emily Chen',
      image: '/placeholder.svg?height=48&width=48',
      rating: 5,
      comment:
        'The variety of products available is impressive. I found exactly what I was looking for at a reasonable price. Highly recommend!',
    },
  ];

  brands = [
    { name: 'Brand 1', logo: '/placeholder.svg?height=80&width=128' },
    { name: 'Brand 2', logo: '/placeholder.svg?height=80&width=128' },
    { name: 'Brand 3', logo: '/placeholder.svg?height=80&width=128' },
    { name: 'Brand 4', logo: '/placeholder.svg?height=80&width=128' },
    { name: 'Brand 5', logo: '/placeholder.svg?height=80&width=128' },
    { name: 'Brand 6', logo: '/placeholder.svg?height=80&width=128' },
  ];

  ngOnInit() {
    this.initMenuItems();
    this.loadCategories();
    this.loadProducts();
  }

  // toggleDarkMode() {
  //   const element = document.querySelector('html');
  //   if (element) {
  //     element.classList.toggle('my-app-dark');
  //   }

  //   console.log('element:', element);
  // }

  private initMenuItems() {
    this.menuItems = [
      {
        label: 'Products',
        icon: 'pi pi-shopping-bag',
      },
      {
        label: 'Categories',
        icon: 'pi pi-tags',
      },
      {
        label: 'Deals',
        icon: 'pi pi-percentage',
      },
      {
        label: 'Contact',
        icon: 'pi pi-phone',
      },
    ];
  }

  private loadCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (response: Category[]) => {
        console.log(response);
        this.categories = response;
      },
      error: (error) => {
        console.error(error);
      },
    });

    // this.categories = [
    //   { id: 1, name: 'Electronics', icon: 'pi pi-desktop', productCount: 42 },
    //   { id: 2, name: 'Clothing', icon: 'pi pi-shopping-bag', productCount: 56 },
    //   { id: 3, name: 'Home & Kitchen', icon: 'pi pi-home', productCount: 38 },
    //   { id: 4, name: 'Sports', icon: 'pi pi-heart', productCount: 24 },
    //   { id: 5, name: 'Beauty', icon: 'pi pi-star', productCount: 19 },
    //   { id: 6, name: 'Books', icon: 'pi pi-book', productCount: 67 },
    // ];
  }

  private loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response: Product[]) => {
        console.log(response);
        this.products = response;
        this.featuredProducts = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  subscribeToNewsletter(email: string) {
    // Implementation would go here
    console.log('Subscribing email:', email);
    // You would typically call a service to handle the subscription
  }
}
