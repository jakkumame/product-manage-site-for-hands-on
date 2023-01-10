import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHistoryListingPageComponent } from './product-history-listing-page.component';

describe('ProductHistoryListingPageComponent', () => {
  let component: ProductHistoryListingPageComponent;
  let fixture: ComponentFixture<ProductHistoryListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHistoryListingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHistoryListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
