import { Router } from 'express'
// import Tenant, { find } from '../models/tenant'
const router = new Router()

// router.post('/Tenants', async (req, res) => {
//     const tenant = new Tenant(req.body)

//     try {
//         await tenant.save()
//         res.status(201).send(tenant)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.get('/tenants', async (req, res) => {
//     try {
//         const tenants = await find({})
//         res.send(tenants)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.get('/tenants/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const tenant = await Tenant.findById(_id)

//         if (!tenant) {
//             return res.status(404).send()
//         }

//         res.send(tenant)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.patch('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/tasks/:id', async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)

//         if (!task) {
//             res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

export default router