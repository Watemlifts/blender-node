import * as util from 'util'
import { BlenderCollection, Indexable } from '../../collection'
import { BlenderInterop } from '../../../worker/interop'
import { PythonInterop } from '../../../python/interop'

/**
 * MeshLoops
 * 
 * https://docs.blender.org/api/current/bpy.types.MeshLoops.html
 */
export class MeshLoops {

    constructor(public interop: BlenderInterop, public accessor: string) { }

    /**
     * add
     * @desc void
     */
    public add(options: { count?: number }): void {
        return PythonInterop.callVoid(this.interop, `${this.accessor}.add`, options)
    }

    [util.inspect.custom]() {
        return this.accessor
    }
}
