import Message from '../models/message.model.js';

export const storeMessage = async (req, res) => {
    try {
        // Extract user ID from request object
        // console.log("req.user", req.params);
        const userId = req.params.id;

        // Extract message content from request body
        const { message } = req.body;

        // Create new message document
        const newMessage = new Message({
            userId: userId, // Associate message with user
            message: message
        });

        // Save message to the database
        await newMessage.save();

        res.status(201).json({ message: "Message stored successfully" });
    } catch (error) {
        console.error("Error storing message:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const retriveMessage = async (req, res) => {
    try {
        // Extract user ID from request object
        const userId = req.params.id;

        // Find all messages associated with the user
        const messages = await Message.find({ userId: userId });

        res.status(200).json(messages);
    } catch (error) {
        console.error("Error retrieving messages:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
