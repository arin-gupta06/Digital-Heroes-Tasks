import Lead from "../models/lead.models.js"


export const createLead = async (req, res) => {
    try {
        const {name, email, budgetRange, message} = req.body;

        if(!name || !email || !budgetRange || !message){
            return res.status(400).json({
                message: "Name, email, budgetRange and message are required fields",
                success: false
            });
        }

        const newLead = await Lead.create({
            name,
            email, 
            budgetRange,
            message
        });

        res.status(201).json({
            data: newLead,
            message: "New Lead added successfully!!",
            success: true
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
        
    }
}

export const getAllLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({createdAt: -1})

        res.status(200).json({
            success: true,
            count: leads.length,
            data: leads
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
        
    }
};


export const updateLead = async (req, res) => {
    try {
        const {id} = req.params;
        const {status} = req.body;

        const allowedStatus = ["New", "Contacted", "Closed"]

        if(!allowedStatus.includes(status)){
            return res.status(400).json({
                success: false,
                message: "Invalid status. Please Check"
            })
        }
        const lead = await Lead.findByIdAndUpdate(
            id,
            {status},
            {  new: true,
               runValidators: true,
            },
        )

        if(!lead){
            return res.status(404).json({
                message: "Requested lead won't found in the database",
                success: false
            })
        }

        return res.status(200).json({
            data: lead,
            message: "Status of the requested lead has been updated.",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
        
    }

}