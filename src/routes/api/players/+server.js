import { error, json } from '@sveltejs/kit';
import { playerManager } from '$lib/server/playerManager.js';

export const GET = async ({ url }) => {
    const date = url.searchParams.get('date');
    if (!date) {
        return error(400, 'Date parameter is required');
    }

    try {
        const gameData = await playerManager.setDate(date).getData();
        return json(gameData.players);
    } catch (err) {
        console.error('Error fetching players:', err);
        return error(500, 'Failed to fetch players');
    }
};

export const POST = async ({ request, url }) => {
    const date = url.searchParams.get('date');
    const body = await request.json();

    if (!date) {
        return error(400, 'Date parameter is required');
    }

    if (!body || !body.playerName || !body.list) {
        return error(400, 'Invalid request body. playerName and list are required');
    }

    try {
        const result = await playerManager.setDate(date).addPlayer(body.playerName, body.list);
        return json(result);
    } catch (err) {
        console.error('Error adding player:', err);
        return error(400, err.message);
    }
};

export const DELETE = async ({ request, url }) => {
    const date = url.searchParams.get('date');
    const body = await request.json();

    if (!date) {
        return error(400, 'Date parameter is required');
    }

    if (!body || !body.playerName || !body.list) {
        return error(400, 'Invalid request body. playerName and list are required');
    }

    try {
        const result = await playerManager.setDate(date).removePlayer(body.playerName, body.list);
        return json(result);
    } catch (err) {
        console.error('Error removing player:', err);
        return error(500, 'Failed to remove player');
    }
};

export const PATCH = async ({ request, url }) => {
    const date = url.searchParams.get('date');
    const body = await request.json();

    if (!date) {
        return error(400, 'Date parameter is required');
    }

    if (!body || !body.playerName || !body.fromList || !body.toList) {
        return error(400, 'Invalid request body. playerName, fromList, and toList are required');
    }

    try {
        const result = await playerManager
            .setDate(date)
            .movePlayer(body.playerName, body.fromList, body.toList);
        return json(result);
    } catch (err) {
        console.error('Error moving player:', err);
        return error(400, err.message);
    }
};
