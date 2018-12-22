//
//  DictionaryProvider.m
//  MyDictionaryApp
//
//  Created by Nicolás Cantó D. on 22-12-18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "DictionaryProvider.h"
@import Dictionary;

@implementation DictionaryProvider

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(findTerms, terms:(NSString *)terms
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  API *api = [API alloc];
  [api fetchFind:terms completion:^(NSObject * dic) {
      resolve(dic);
  }];
}

RCT_REMAP_METHOD(findPhoto, filter:(NSString *)filter
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  API *api = [API alloc];
  [api fetchPhotoFind:filter completion:^(NSObject * dic) {
    resolve(dic);
  }];
}

@end
