import { expect } from 'chai';
import 'mocha';
import NcTemplateParser from '../lib/templateParser/NcTemplateParser';
import template from './template';

describe('Template parser', () => {
  // Called once before any of the tests in this block begin.
  before(function(done) {
    done();
  });

  after(done => {
    done();
  });

  describe('Parse blog templates', function() {
    it('Simple formula', function() {
      const parser = new NcTemplateParser('mysql');

      const { tables } = parser.parse(template);
      expect(tables).length(3);
    });
  });
});
