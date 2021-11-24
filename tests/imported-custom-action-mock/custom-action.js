import del from 'del';
import fspp from '../../src/fs-promise-proxy.js';
import { normalizePath } from '../../src/actions/_common-action-utils.js';

module.exports = async function (data, cfg /*, plop*/) {
	const removeFilePath = cfg.path;
	if (await fspp.fileExists(removeFilePath)) {
		return await del([normalizePath(removeFilePath)]);
	} else {
		throw `Path does not exist ${removeFilePath}`;
	}
};
