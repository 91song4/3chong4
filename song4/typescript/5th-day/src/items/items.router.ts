/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import BaseItem, { Item } from "./item.interface";
import * as ItemService from "./items.service";

/**
 * Router Definition
 */
const router = express.Router();
export default router;

/**
 * Controller Definitions
 */

// GET items
router.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET items/:id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const itemId: number = parseInt(req.params.id, 10);
    const item: Item = await ItemService.find(itemId);

    if (!item) return res.status(404).send("item not found");

    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST items
router.post("/", async (req: Request, res: Response) => {
  try {
    const newItem: BaseItem = req.body;
    const createdItem: Item = await ItemService.create(newItem);

    res.status(201).send(createdItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PUT items/:id
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const itemId: number = parseInt(req.params.id, 10);
    const item: BaseItem = req.body;

    const updatedItem = await ItemService.update(itemId, item);
    if (!updatedItem) return res.status(404).send("item not found");

    res.status(200).send(updatedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE items/:id
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const itemId: number = parseInt(req.params.id, 10);
    if (await ItemService.remove(itemId) === null) {
      return res.status(404).send("item not found");
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
