import express from 'express';
import Event from '../models/event';
import adminRestricted from '../middleware/adminRestricted';
import validateInput from '../shared/validations/event';

let router = express.Router();

// Create an event
router.post('/', adminRestricted, function(req, res) {				
		
    const { errors, isValid } = validateInput(req.body);
            
    if (isValid) {
        const { title, headline, description, eventDate } = req.body;      
        const newEvent = new Event({
            title: title,
            headline: headline,
            description: description, 
            eventDate: eventDate, 
            createdAt: Date.now()                
        });
        
        newEvent.save()
            .then(event => res.status(201).json({ message: 'Event created!', event: event }))
            .catch(err => res.status(500).json({ error: err }));	        
    }
    else {
        res.status(400).json(errors);
    }          
        	
});

router.get('/', (req, res) => {    
    Event.find().limit(20).sort({ createdAt: 1 }).exec(function(err, events) {
        if (err) res.send(err);   
        //setTimeout(() => res.json(events), 2000)         
        res.json(events);
    });
});

router.get('/:eventId', function(req, res) {
    if(req.params.eventId !== 'undefined') {
    Event.findById(req.params.eventId)
        .then(event => res.json(event))
        .catch(err => res.status(404).json({ message: 'Error occured:', err }));
    }
    else {
        res.status(404).json({ message: 'Wrong event Id provided.' })
    }        
});

router.delete('/:eventId', adminRestricted, function(req, res) {
    if(req.params.eventId !== 'undefined') {
        Event.remove({ _id: req.params.eventId })
            .then(event => res.json({ message: 'Successfully deleted' }))
            .catch(err => res.status(404).json({ message: 'Error occured:', err }));      
    }
    else {
        res.status(404).json({ message: 'Wrong event Id provided.' })
    }

});

// Update the event with the specific id
// TODO: organize it more cleverly
router.put('/:event_id', adminRestricted, function(req, res) {
    Event.findById(req.params.event_id)
        .then(event => {
            event.title = req.body.title;
            event.headline = req.body.headline;
            event.description = req.body.description;
            event.createdAt = req.body.createdAt;
            event.save(function(err, event) {
                if (err) res.send(err);	            		
                res.json({ message: 'Event updated!', event: event });
            });
        })
        .catch(err => {
            res.send(err); 
        });    
});

export default router;