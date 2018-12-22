//
//  API.swift
//  Dictionary
//
//  Created by Nicolás Cantó D. on 22-12-18.
//  Copyright © 2018 Carlos Ruiz. All rights reserved.
//

import UIKit

@objc public class API:NSObject {
    
    public override init() {
        
    }
    
    @objc public func fetchFind(_ terms: String, completion: @escaping (_ result: Any)->())  {
        let url = NSURL(string: "https://api.urbandictionary.com/v0/define?term=\(terms)")
        fetch(url: url! as URL) { (data) in
            completion(data)
        }
    }
    
    @objc public func fetchPhotoFind(_ terms: String, completion: @escaping (_ result: Any)->())  {
        let url = NSURL(string: "https://api.flickr.com/services/feeds/photos_public.gne?tags=\(terms)&tagmode=any&format=json")
        
        fetch(url: url! as URL) { (data) in
            completion(data)
        }
    }
    
    private func fetch(url: URL, completion: @escaping (_ result: Any)->()) {
        
        URLSession.shared.dataTask(with: url) { (data, response, error) in
            
            if error != nil {
                print(error!)
                return
            }
            
            do {
                let json = try JSONSerialization.jsonObject(with: data!, options: .mutableContainers)
                completion(json)
                
            } catch _ {
                let dictionary = ["success": false]
                print(dictionary)
            }
            }.resume()
    }
    
}




