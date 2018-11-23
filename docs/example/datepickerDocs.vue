<template>
  <doc-section id="mz-datepicker" name="Daterange">
    <div class="bs-example">
        <div>StartTime:{{startTime}}</div>
        <div>EndTime:{{endTime}}</div>
        <div>Time:{{time}}</div>
        <mz-datepicker ch></mz-datepicker>
        <mz-datepicker format="yyyy-MM-dd" :start-time.sync="startTime" :end-time.sync="endTime" range en confirm :on-confirm="confrim"></mz-datepicker>
        <mz-datepicker format="yyyy-MM-dd" :start-time.sync="startTime" :end-time.sync="endTime" range ch ></mz-datepicker>
        <mz-datepicker format="yyyy-MM-dd HH:mm:ss" clearable :time.sync="time"></mz-datepicker>
        <mz-datepicker disabled></mz-datepicker>
 
    <doc-code language="markup">
        <mz-datepicker format="yyyy-MM-dd" :start-time.sync="startTime" :end-time.sync="endTime" range ch ></mz-datepicker>
    </doc-code>
    <doc-table>
      <div>
        <p>value</p>
        <p><code>String</code></p>
        <p></p>
        <p>Value of the input DOM</p>
      </div>
      <div>
        <p>width</p>
        <p><code>String</code></p>
        <p>200px</p>
        <p>Width of the input DOM</p>
      </div>
      <div>
        <p>format</p>
        <p><code>String</code></p>
        <p><code>MMMM/dd/yyyy</code></p>
        <p>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</p>
      </div>
      <div>
        <p>disabled-days-of-week</p>
        <p><code>Array</code></p>
        <p></p>
        <p>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).
           Multiple values should be comma-separated.</p>
      </div>
      <div>
        <p>clear-button</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>If <strong>true</strong> shows an &times; shaped button to clear the selected date.
          Usefull in forms where date entry is optional.</p>
      </div>
      <div>
        <p>placeholder</p>
        <p><code>String</code></p>
        <p></p>
        <p>Placeholder to put on the input field when no date (null or empty) is set</p>
      </div>
    </doc-table>
  </div>
  <div></div>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import checkbox from 'src/Checkbox.vue'
import mzDatepicker from 'src/Daterange.vue'
import vSelect from 'src/Select.vue'
import vOption from 'src/Option.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    checkbox,
    mzDatepicker,
    vSelect,
    vOption
  },
  data () {
    return {
      time: '2016-05-15',
      startTime: new Date('2016-03-31').getTime(),
      endTime: new Date('2016-03-31').getTime()
    }
  },
  methods:{
      confrim:function(startTime,endTime){
          console.log(startTime);
          console.log(endTime);
      }
  }
}
</script>
