//
//  ViewController.swift
//  library
//
//  Created by user148084 on 11/13/18.
//  Copyright © 2018 user148084. All rights reserved.
//

import UIKit

class ViewControllerFramework: UIViewController {
    
    @IBOutlet weak var term: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func searchBtn(_ sender: Any) {
        print("action")
        if let termino = term.text {
            if !termino.isEmpty {
                
                var request = URLRequest(url: URL(string: "http://api.urbandictionary.com/v0/define?term=\(termino)")!)
                request.httpMethod = "GET"
                
                URLSession.shared.dataTask(with: request, completionHandler: { data, response, error -> Void in
                    do {
                        if let data = data {
                            let jsonResponse = try? JSONSerialization.jsonObject(with:
                                data, options: [])
                            if let dataArray = jsonResponse as? [String : Any] {
                                
                                if let list = dataArray["list"] as?  [Any]{
                                    //print(list)
                                    if let first = list.first as? [String:Any]{
                                        if let definition = first["definition"] as? String {
                                            DispatchQueue.main.sync {
                                                let vc = self.storyboard!.instantiateViewController(withIdentifier: "detailscontroller") as! DetailsController
                                                vc.termino = termino
                                                vc.definition = definition
                                                let navigationController = UINavigationController(rootViewController: vc)
                                                navigationController.navigationItem.leftBarButtonItem = self.splitViewController?.displayModeButtonItem
                                                navigationController.navigationItem.leftItemsSupplementBackButton = true
                                                self.present(navigationController, animated: true, completion: nil)
                                            }
                                        }
                                        
                                    }
                                    
                                }
                            }
                            
                           
                        }
                        
                    } catch {
                        print("JSON Serialization error")
                    }
                }).resume()
            }else{
                
            }
    }
    
    
}
}
