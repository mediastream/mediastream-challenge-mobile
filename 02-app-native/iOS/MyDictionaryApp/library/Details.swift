//
//  Details.swift
//  library
//
//  Created by user148084 on 11/13/18.
//  Copyright © 2018 user148084. All rights reserved.
//

import UIKit

class DetailsController: UIViewController {
    
    var termino = String()
    var definition = String()
    var image = UIImageView()
    
    @IBOutlet weak var imageviewLabel: UIImageView!
    @IBOutlet weak var terminoLabel: UILabel!
    
    @IBOutlet weak var definitionLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        terminoLabel.text = termino
        definitionLabel.text = definition
        let button = UIBarButtonItem(barButtonSystemItem: UIBarButtonItem.SystemItem.action, target: self, action: #selector(shareBtn))
        navigationItem.rightBarButtonItem = button
        
        
        let button2 = UIBarButtonItem(barButtonSystemItem: .reply, target: self, action: #selector(backBtn))
        navigationItem.leftBarButtonItem = button2
//        navigationItem.leftBarButtonItem = splitViewController?.displayModeButtonItem
//        navigationItem.leftItemsSupplementBackButton = true
    }

    @IBAction func soundBtn(_ sender: Any) {
        
        let alert = UIAlertController(title: "MediaStream", message: "No audio found", preferredStyle: UIAlertController.Style.alert)
        alert.addAction(UIAlertAction(title: "Ok", style: UIAlertAction.Style.default, handler: nil))
        self.present(alert, animated: true, completion: nil)
    }
    @objc func backBtn() {
        dismiss(animated: true, completion: nil)
    }
    
    @objc func shareBtn(_ sender: UIButton) {
        
        let textToShare = "Este es un ejemplo de share"
        
            let objectsToShare = [textToShare] as [Any]
            let activityVC = UIActivityViewController(activityItems: objectsToShare, applicationActivities: nil)
            activityVC.excludedActivityTypes = [UIActivity.ActivityType.airDrop, UIActivity.ActivityType.addToReadingList]
        activityVC.popoverPresentationController?.sourceView = sender
            self.present(activityVC, animated: true, completion: nil)
        
    }
}
