//
//  ViewController.swift
//  testmediastream
//
//  Created by user148084 on 11/13/18.
//  Copyright © 2018 user148084. All rights reserved.
//

import UIKit
import library

class ViewController: UIViewController {

    @IBOutlet weak var menuBtn: UIButton!
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }

    @IBAction func actionBtn(_ sender: Any) {
        let frameworkBundle = Bundle(identifier: "cl.rayout.library")
        let storyboard = UIStoryboard(name: "Storyboard", bundle: frameworkBundle)
        let homeView = storyboard.instantiateViewController(withIdentifier: "menuprincipal")
        
        let navigationController = UINavigationController(rootViewController: homeView)
        
        self.present(navigationController, animated: true, completion: nil)
        
        
    }
    
}

