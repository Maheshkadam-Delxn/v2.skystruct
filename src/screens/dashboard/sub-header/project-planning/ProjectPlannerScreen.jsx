import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons

export default function ProjectPlannerScreen() {
  const [expandedSections, setExpandedSections] = useState({
    xerPlanner: true,
    construction: true,
    general: true,
    milestones: true,
    contract: true,
    monitoring: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Column width configuration
  const colWidths = {
    actions: Dimensions.get('window').width * 0.15,
    name: Dimensions.get('window').width * 0.35,
    actNo: Dimensions.get('window').width * 0.15,
    startDate: Dimensions.get('window').width * 0.2,
    endDate: Dimensions.get('window').width * 0.2,
    duration: Dimensions.get('window').width * 0.1,
  };

  const totalWidth = Object.values(colWidths).reduce((sum, width) => sum + width, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity</Text>
      
      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={{ width: totalWidth }}>
            {/* Header Row */}
            <View style={styles.headerRow}>
              <Text style={[styles.headerCell, {width: colWidths.actions}]}>Actions</Text>
              <Text style={[styles.headerCell, {width: colWidths.name}]}>Name</Text>
              <Text style={[styles.headerCell, {width: colWidths.actNo}]}>Act. No.</Text>
              <Text style={[styles.headerCell, {width: colWidths.startDate}]}>Start Date</Text>
              <Text style={[styles.headerCell, {width: colWidths.endDate}]}>End Date</Text>
              <Text style={[styles.headerCell, {width: colWidths.duration}]}>Duration</Text>
            </View>

            {/* Xer Planner Section */}
            <TouchableOpacity onPress={() => toggleSection('xerPlanner')}>
              <View style={styles.sectionHeader}>
                <View style={[styles.cell, {width: colWidths.actions, alignItems: 'center'}]}>
                  <Ionicons 
                    name={expandedSections.xerPlanner ? "chevron-down" : "chevron-forward"} 
                    size={24} 
                    color="#0066cc" 
                  />
                </View>
                <Text style={[styles.sectionHeaderText, {width: totalWidth - colWidths.actions}]}>- Xer Planner</Text>
              </View>
            </TouchableOpacity>
            
            {expandedSections.xerPlanner && (
              <>
                {/* Construction of Private Villa */}
                <TouchableOpacity onPress={() => toggleSection('construction')}>
                  <View style={[styles.row, styles.subSection]}>
                    <View style={[styles.cell, {width: colWidths.actions, alignItems: 'center'}]}>
                      <Ionicons 
                        name={expandedSections.construction ? "chevron-down" : "chevron-forward"} 
                        size={24} 
                        color="#0066cc" 
                      />
                    </View>
                    <Text style={[styles.cell, {width: colWidths.name}]}>- CONSTRUCTION OF PRIVATE VILLA (B + G+ PH) on Plot No. 700090504</Text>
                    <Text style={[styles.cell, {width: colWidths.actNo}]}>57411</Text>
                    <Text style={[styles.cell, {width: colWidths.startDate}]}></Text>
                    <Text style={[styles.cell, {width: colWidths.endDate}]}></Text>
                    <Text style={[styles.cell, {width: colWidths.duration}]}></Text>
                  </View>
                </TouchableOpacity>
                
                {expandedSections.construction && (
                  <>
                    {/* General */}
                    <TouchableOpacity onPress={() => toggleSection('general')}>
                      <View style={[styles.row, styles.subSectionLevel2]}>
                        <View style={[styles.cell, {width: colWidths.actions, alignItems: 'center'}]}>
                          <Ionicons 
                            name={expandedSections.general ? "chevron-down" : "chevron-forward"} 
                            size={24} 
                            color="#0066cc" 
                          />
                        </View>
                        <Text style={[styles.cell, {width: colWidths.name}]}>- GENERAL</Text>
                        <Text style={[styles.cell, {width: colWidths.actNo}]}>57412</Text>
                        <Text style={[styles.cell, {width: colWidths.startDate}]}></Text>
                        <Text style={[styles.cell, {width: colWidths.endDate}]}></Text>
                        <Text style={[styles.cell, {width: colWidths.duration}]}></Text>
                      </View>
                    </TouchableOpacity>
                    
                    {/* Milestones */}
                    <TouchableOpacity onPress={() => toggleSection('milestones')}>
                      <View style={[styles.row, styles.subSectionLevel2]}>
                        <View style={[styles.cell, {width: colWidths.actions, alignItems: 'center'}]}>
                          <Ionicons 
                            name={expandedSections.milestones ? "chevron-down" : "chevron-forward"} 
                            size={24} 
                            color="#0066cc" 
                          />
                        </View>
                        <Text style={[styles.cell, {width: colWidths.name}]}>- MILESTONES</Text>
                        <Text style={[styles.cell, {width: colWidths.actNo}]}>57413</Text>
                        <Text style={[styles.cell, {width: colWidths.startDate}]}></Text>
                        <Text style={[styles.cell, {width: colWidths.endDate}]}></Text>
                        <Text style={[styles.cell, {width: colWidths.duration}]}></Text>
                      </View>
                    </TouchableOpacity>
                    
                    {expandedSections.milestones && (
                      <>
                        {/* Contract Milestone */}
                        <TouchableOpacity onPress={() => toggleSection('contract')}>
                          <View style={[styles.row, styles.subSectionLevel3]}>
                            <View style={[styles.cell, {width: colWidths.actions, alignItems: 'center'}]}>
                              <Ionicons 
                                name={expandedSections.contract ? "chevron-down" : "chevron-forward"} 
                                size={24} 
                                color="#0066cc" 
                              />
                            </View>
                            <Text style={[styles.cell, {width: colWidths.name}]}>- CONTRACT MILESTONE</Text>
                            <Text style={[styles.cell, {width: colWidths.actNo}]}>57414</Text>
                            <Text style={[styles.cell, {width: colWidths.startDate}]}></Text>
                            <Text style={[styles.cell, {width: colWidths.endDate}]}></Text>
                            <Text style={[styles.cell, {width: colWidths.duration}]}></Text>
                          </View>
                        </TouchableOpacity>
                        
                        {expandedSections.contract && (
                          <>
                            <View style={[styles.row, styles.subSectionLevel4]}>
                              <Text style={[styles.cell, {width: colWidths.actions}]}></Text>
                              <Text style={[styles.cell, {width: colWidths.name}]}>- Commencement Date</Text>
                              <Text style={[styles.cell, {width: colWidths.actNo}]}>J148-GMS-GN-G-RM1000</Text>
                              <Text style={[styles.cell, {width: colWidths.startDate}]}>2025-01-25 07:00</Text>
                              <Text style={[styles.cell, {width: colWidths.endDate}]}>2025-01-25 07:00</Text>
                              <Text style={[styles.cell, {width: colWidths.duration}]}>1</Text>
                            </View>
                            <View style={[styles.row, styles.subSectionLevel4]}>
                              <Text style={[styles.cell, {width: colWidths.actions}]}></Text>
                              <Text style={[styles.cell, {width: colWidths.name}]}>- Project Complete</Text>
                              <Text style={[styles.cell, {width: colWidths.actNo}]}>J148-GMS-GN-G-RM1022</Text>
                              <Text style={[styles.cell, {width: colWidths.startDate}]}>2026-09-24 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.endDate}]}>2026-09-24 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.duration}]}>1</Text>
                            </View>
                          </>
                        )}
                        
                        {/* Monitoring Milestone */}
                        <TouchableOpacity onPress={() => toggleSection('monitoring')}>
                          <View style={[styles.row, styles.subSectionLevel3]}>
                            <View style={[styles.cell, {width: colWidths.actions, alignItems: 'center'}]}>
                              <Ionicons 
                                name={expandedSections.monitoring ? "chevron-down" : "chevron-forward"} 
                                size={24} 
                                color="#0066cc" 
                              />
                            </View>
                            <Text style={[styles.cell, {width: colWidths.name}]}>- MONITORING MILESTONE</Text>
                            <Text style={[styles.cell, {width: colWidths.actNo}]}>57415</Text>
                            <Text style={[styles.cell, {width: colWidths.startDate}]}></Text>
                            <Text style={[styles.cell, {width: colWidths.endDate}]}></Text>
                            <Text style={[styles.cell, {width: colWidths.duration}]}></Text>
                          </View>
                        </TouchableOpacity>
                        
                        {expandedSections.monitoring && (
                          <>
                            <View style={[styles.row, styles.subSectionLevel4]}>
                              <Text style={[styles.cell, {width: colWidths.actions}]}></Text>
                              <Text style={[styles.cell, {width: colWidths.name}]}>- Complete Structural Club House</Text>
                              <Text style={[styles.cell, {width: colWidths.actNo}]}>J148-GMM-GN-G-MM1017</Text>
                              <Text style={[styles.cell, {width: colWidths.startDate}]}>2025-10-23 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.endDate}]}>2025-10-23 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.duration}]}>1</Text>
                            </View>
                            <View style={[styles.row, styles.subSectionLevel4]}>
                              <Text style={[styles.cell, {width: colWidths.actions}]}></Text>
                              <Text style={[styles.cell, {width: colWidths.name}]}>- Complete Structural Main Villa</Text>
                              <Text style={[styles.cell, {width: colWidths.actNo}]}>J148-GMM-GN-G-MM1018</Text>
                              <Text style={[styles.cell, {width: colWidths.startDate}]}>2026-06-03 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.endDate}]}>2026-06-03 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.duration}]}>1</Text>
                            </View>
                            <View style={[styles.row, styles.subSectionLevel4]}>
                              <Text style={[styles.cell, {width: colWidths.actions}]}></Text>
                              <Text style={[styles.cell, {width: colWidths.name}]}>- Complete Structural Service Block</Text>
                              <Text style={[styles.cell, {width: colWidths.actNo}]}>J148-GMM-GN-G-MM1019</Text>
                              <Text style={[styles.cell, {width: colWidths.startDate}]}>2025-11-27 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.endDate}]}>2025-11-27 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.duration}]}>1</Text>
                            </View>
                            <View style={[styles.row, styles.subSectionLevel4]}>
                              <Text style={[styles.cell, {width: colWidths.actions}]}></Text>
                              <Text style={[styles.cell, {width: colWidths.name}]}>- Complete Structural External Works</Text>
                              <Text style={[styles.cell, {width: colWidths.actNo}]}>J148-GMM-GN-G-MM1020</Text>
                              <Text style={[styles.cell, {width: colWidths.startDate}]}>2026-05-14 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.endDate}]}>2026-05-14 17:00</Text>
                              <Text style={[styles.cell, {width: colWidths.duration}]}>Need</Text>
                            </View>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#0066cc',
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#99ccff',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#0077cc',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#005599',
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#ffffff',
    paddingHorizontal: 4,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    backgroundColor: '#cce5ff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#99ccff',
    alignItems: 'center',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    color: '#0066cc',
    paddingHorizontal: 4,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e6eeff',
    alignItems: 'center',
  },
  subSection: {
    backgroundColor: '#f0f8ff',
  },
  subSectionLevel2: {
    backgroundColor: '#e6f2ff',
  },
  subSectionLevel3: {
    backgroundColor: '#d9ebff',
  },
  subSectionLevel4: {
    backgroundColor: '#cce5ff',
  },
  cell: {
    fontSize: 12,
    color: '#004080',
    paddingHorizontal: 4,
    textAlign: 'left',
  },
});