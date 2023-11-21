import { createInjectableType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  return this.SellerService.isSellerLoggedIn;
};
